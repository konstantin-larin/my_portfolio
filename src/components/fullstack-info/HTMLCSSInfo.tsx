export default function HTMLCSSInfo() {
    return (
        <div className={'block-info-inner'}>
            <p>Сначала я освоил верстку сайтов.</p>
            <ul>
                Понял концепции правильной верстки:
                <li>Семантику</li>
                <li>Адаптивную верстку</li>
                <li>Кроссбраузерность</li>
                <li>Формы</li>
            </ul>
            <ul>
                Изучал верстку по следующим источникам:
                <a href="https://www.w3schools.com/" target={'_blank'}>
                    <li>W3Schools</li>
                </a>
                <a href="https://metanit.com/web/html5/" target={'_blank'}>
                    <li>Metanit</li>
                </a>
                <a href="https://habr.com/ru/companies/piter/articles/450682/" target={'_blank'}>
                    <li>"CSS для профи" Кит Грант.</li>
                </a>
            </ul>
        </div>
    )
}