import gif from "../../assets/card_learning.gif"
export default function DesktopAppInfo(){
    return (
        <div className={'block-info-inner'}>
            <h3>Card Learning</h3>
            <p>
                В целях изучения indexedDB и веб-компонентов решил создать приложение
                с возможностями добавления, удаления и чтения информации.
            </p>
            <p>
                <a href="https://github.com/konstantin-larin/Card-Learning"
                    target={'_blank'}
                >Перейти к репозиторию</a>
            </p>
            <p>
                <img src={gif} alt="card learning gif"/>
            </p>
        </div>
    )
}