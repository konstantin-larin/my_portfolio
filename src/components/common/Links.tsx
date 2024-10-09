import Github from "../../assets/icons/Github.tsx";
import Telegram from "../../assets/icons/Telegram.tsx";
import Vk from "../../assets/icons/Vk.tsx";

export default function Links(){
    return (
        <aside className={'links'}>
            <a href="https://github.com/konstantin-larin" target={"_blank"}><Github></Github></a>
            <a href="https://t.me/kl_development" target={"_blank"}> <Telegram></Telegram> </a>
            <a href="https://vk.com/konstantin_larin_33" target={"_blank"}><Vk></Vk></a>
        </aside>
    )
}