import './Title.css';

export default function Title(props) {

    return(
        <h2 className="about__title">{ props.text }</h2>
    );
}