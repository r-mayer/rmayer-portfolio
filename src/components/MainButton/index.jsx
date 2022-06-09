import './index.css';

function MainButton(props) {
    return ( 
        <button className='main-btn'>{props.children}</button>
    );
}

export default MainButton;