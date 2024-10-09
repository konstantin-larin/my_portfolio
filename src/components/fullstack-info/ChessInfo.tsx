export default function ChessInfo(){
    return (
        <div className={'block-info-inner'}>
            <a href="https://konstantin-larin.github.io/ts_learn/">
                <p>Ознакомиться</p>
            </a>

            <p>
                В целях изучения этого языка я принялся разрабатывать шахматы.
                На основе <a href="https://youtu.be/mUvYGUYMvKo?si=Cll9mX5Y7-107gTm" target={'_blank'}>кода Ulbi </a>
                была реализована шахматная доска, фигуры и их ходы, сам же я реализовал шах, мат, пат, рокировку, взятие на проходе и прочие нюансы игры.
                Хотелось еще реализовать режим игры против компьютера, но при попытке это сделать (взаимодействовал с Lichess Api) понял, что лучше воспользоваться более гибкой и масштабной библиотекой chess.js.
            </p>
        </div>
    )
}