import './index.css';

function LightButton(props) {
    return ( 
        <button className="btn-light">{props.children}</button>
     );
}

export default LightButton;