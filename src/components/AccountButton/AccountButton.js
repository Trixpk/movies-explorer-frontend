import './AccountButton.css';
import { Link } from 'react-router-dom';

export default function AccountButton(props) {
    const accountButtonClass = props.isHidden ? 'account-link account-link_hidden' : 'account-link';

    return(
        <Link to="/profile" className={ (props.isMobileMenu) ? 'account-link account-link_mobile' : accountButtonClass }><span className="account-icon">Аккаунт</span></Link>
    );
}