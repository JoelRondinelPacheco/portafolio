import styles from './styles.module.css';

function linkedin ()  {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm1.05 5h1.9v6h-1.9zm2.025-1.995a1.075 1.075 0 1 1-2.15 0a1.075 1.075 0 0 1 2.15 0M12 8.357c0-1.805-1.167-2.507-2.326-2.507a2.206 2.206 0 0 0-1.095.231c-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001c.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906z" clipRule="evenodd"/></svg>
    )
}

function email() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2"/><path fill="currentColor" d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"/></svg>
    )
}

const ContactCard = ({...props}) => {
    const { type, icon } = props

    function getIcon(iconType) {
        switch (iconType) {
            case "Linkedin":
                return linkedin();
            case "Email":
                return email();
            default:
                return linkedin();
        }

    }

    return (
        <div className={`${styles.cardWrapper} kanit-regular`}>
            <div>{getIcon(type)}</div>
            <p>{type}</p>
            
        </div>
    )
}

export default ContactCard;