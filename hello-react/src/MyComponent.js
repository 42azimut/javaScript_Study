import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
            <div> 
                안녕하세요 내 이름은 {name} 입니다 <br/>
            chidren 값은 {children} 입니다. <br />
            내가 좋아 하는 숫자는 {favoriteNumber} 입니다
            </div>
        )
};

MyComponent.defaultProps = {
    name: 'basic name'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}


export default MyComponent;

