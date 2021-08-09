import './Promo.css';
import NavTab from "../NavTab/NavTab";

export default function Promo() {

    return(
        <section className="promo margin_20">
            <h1 className="promo__title">
                Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <NavTab/>
        </section>
    );
}