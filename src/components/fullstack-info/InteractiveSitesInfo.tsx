export default function InteractiveSitesInfo() {
    return (
        <div className={'block-info-inner'}>
            <ul>
                Создавал эти сайты без использования библиотек и фреймворков - на чистом JavaScript и
                CSS:
                <li>
                    <a href="https://konstantin-larin.github.io/vedexpress/" target={'_blank'}>
                        <h3>
                            VedExpress
                        </h3>
                    </a>
                    <ul>
                        Особенности:
                        <li>
                            Использование grid
                        </li>
                        <li>
                            Слайдер
                        </li>
                        <li>
                            Переключение языков
                        </li>
                    </ul>

                    <a href="https://konstantin-larin.github.io/vedexpress/" target={'_blank'}>
                        <p>Перейти на сайт</p>
                    </a>
                </li>
                <li>
                    <a href="https://konstantin-larin.github.io/aperture/" target={'_blank'}>
                        <h3>
                            Aperture
                        </h3>
                    </a>
                    <ul>
                        Особенности:
                        <li>
                            Параллакс
                        </li>
                        <li>
                            Галлерея
                        </li>
                        <li>
                            Бегущая строка брендов
                        </li>
                    </ul>
                    <a href="https://konstantin-larin.github.io/aperture/" target={'_blank'}>
                        <p>Перейти на сайт</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}