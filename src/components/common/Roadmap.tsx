import {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import FullStackBlockInfo from "../FullStackBlockInfo.tsx";
import {BlockModel} from "../../services/roadmap.ts";
import {FullStackInfo} from "../../services/FullStackInfo.ts";
import {Block} from "./Block.tsx";
import {funcs} from "../../services/funcs.ts";
import {LanguageContext} from "./contexts/LanguageContext.tsx";


export default function Roadmap({name, roadmap}: { name: string, roadmap: BlockModel[] }) {
    const {language} = useContext(LanguageContext)
    const blocksContainerRef = useRef<HTMLDivElement | null>(null);
    const blocksRef = useRef<(HTMLDivElement | null)[]>([]);
    const [block, setBlock] = useState<BlockModel>(
        new BlockModel('Инфо', FullStackInfo.DEFAULT, 'info')
    );


    const [hidden, setHidden] = useState<boolean>(true);
    useEffect(() => {
        if (hidden) {
            document.body.classList.remove('overflow-hidden');
        } else document.body.classList.add('overflow-hidden');
        // if(window.innerWidth < 640)
    }, [hidden]);


    const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        // Обработчик изменения размера окна
        const handleResize = () => {

            setWindowSize({width: window.innerWidth, height: window.innerHeight});
        };

        // Добавляем обработчик события resize
        window.addEventListener('resize', handleResize);

        // Вызываем handleResize для установки начального размера
        handleResize();

        // Убираем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const colsCount = funcs.getBlocksContainerColCount(windowSize.width);
    const [vectors, setVectors] = useState<string[]>([]);
    useLayoutEffect(() => {

        // const offsetTop = blocksContainerRef.current?.getBoundingClientRect().top || 0;
        const newVectors: string[] = [];
        let direction: 'right' | 'left' = 'right';
        let oppositeDirection: 'left' | 'right' = 'left';

        if (blocksRef.current) {
            // const offsetTop = blocksContainerRef.current?.offsetTop || 0;
            for (let i = 0; i < blocksRef.current.length - 1; i++) {
                const orderNum = i + 1;
                const el = blocksRef.current[i];
                const nextEl = blocksRef.current[orderNum];
                if (!el || !nextEl) break;

                // надо сначала поменять местами grid-элементы

                const elRect = el.getBoundingClientRect();
                const nextElRect = nextEl.getBoundingClientRect();
                const isEndOfRow = orderNum % colsCount === 0;

                let startPoint: null | { x: number, y: number } = null;
                let endPoint: null | { x: number, y: number } = null;
                let qPoint: null | { x: number, y: number } = null;
                const elY = el.offsetTop + el.scrollHeight / 2;
                const nextElY = nextEl.offsetTop + el.scrollHeight / 2;

                if (isEndOfRow) {
                    startPoint = {
                        x: elRect[direction],
                        y: elY,
                    };
                    endPoint = {
                        x: nextElRect[direction],
                        y: nextElY,
                    };

                    if (direction === 'right') {
                        qPoint = {
                            x: ((startPoint.x + endPoint.x) / 2) + 60,
                            y: startPoint.y + ((endPoint.y - startPoint.y) / 2),
                        };
                    } else {
                        qPoint = {
                            x: ((startPoint.x + endPoint.x) / 2) - 60,
                            y: startPoint.y + ((endPoint.y - startPoint.y) / 2),
                        };
                    }

                    [oppositeDirection, direction] = [direction, oppositeDirection];
                } else {
                    startPoint = {
                        x: elRect[direction],
                        y: elY,
                    }
                    endPoint = {
                        x: nextElRect[oppositeDirection],
                        y: elY,
                    }
                    qPoint = {
                        x: ((startPoint.x + endPoint.x) / 2) * 1.2,
                        y: startPoint.y + ((endPoint.y - startPoint.y) / 2),
                    };
                }

                const vector =
                    `M${startPoint.x} ${startPoint.y} Q${qPoint.x} ${qPoint.y} ${endPoint.x} ${endPoint.y}`;
                newVectors.push(vector);
            }
        }
        setVectors(newVectors);
    }, [windowSize, language]);

    const vectorsRef = useRef<(SVGPathElement | null)[]>([]);
    useEffect(() => {
        // const queue: HTMLElement[] = [];
        // let isAnimating = false;
        //
        // const animateElement = async (element: HTMLElement) => {
        //     return new Promise<void>((resolve) => {
        //         element.classList.add('shown');
        //         // Ждем окончания анимации
        //         setTimeout(() => {
        //             resolve()
        //         }, 500);
        //         // element.addEventListener('animationend', () => {
        //         //     resolve();
        //         // }, { once: true });
        //     });
        // };

        // const processQueue = async () => {
        //     if (isAnimating) return;
        //     isAnimating = true;
        //
        //     while (queue.length > 0) {
        //         const element = queue.shift();
        //         if (element) {
        //             await animateElement(element);
        //         }
        //     }
        //
        //     isAnimating = false;
        // };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(entry.target);
                        // Добавляем класс при появлении элемента
                        // console.log(entry.target);
                        // queue.push(entry.target as HTMLElement);
                        entry.target.classList.add('shown');
                        observer.unobserve(entry.target);
                        // processQueue();
                        // entry.target.classList.add('shown');
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
            }
            );

        if (vectorsRef.current) {
            for (let vector of vectorsRef.current) {
                if (vector) {
                    observer.observe(vector);
                }
            }
        }

        return () => {
            for (let vector of vectorsRef.current) {
                if (vector) {
                    observer.unobserve(vector);
                }
            }
        };
    }, [vectors]);


    function toggleHidden(hidden: boolean) {
        setHidden(hidden);
    }


    const grid: BlockModel[][] = [];
    let row = [];
    for (let i = 0; i < roadmap.length; i++) {
        const block = roadmap[i];
        if (row.length === colsCount) {
            grid.push(row);
            row = [];
        }
        row.push(block);
    }
    if (row.length > 0) {
        grid.push(row)
        row = [];
    }


    return (
        <div className={'roadmap'}>
            <FullStackBlockInfo block={block} hidden={hidden} setHidden={toggleHidden}></FullStackBlockInfo>
            <h1>{name}</h1>
            <div className={'absolute top-0 left-0 right-0 bottom-0 -z-10'}>
                <svg className={'blocks-container-svg'}>
                    {vectors.map((vector, index) => (
                        <path key={index}
                            ref={(el) => {
                                vectorsRef.current[index] = el;
                            }}
                            d={vector} fill="transparent"/>
                    ))}
                </svg>
            </div>
            <div className="blocks-container" ref={blocksContainerRef}>
                {
                    grid.map((row, i) => {
                        const isOdd = i % 2 !== 0;
                        return (
                            <div key={i} className={'blocks-row ' + (isOdd ? 'flex-row-reverse' : '')}>
                                {row.map((block, j) => {
                                    return (
                                        <Block
                                            ref={(el) => {

                                                blocksRef.current[i * colsCount + j] = el;
                                            }}

                                            key={j} model={block}
                                            setBlock={setBlock}
                                            setHidden={toggleHidden}/>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

