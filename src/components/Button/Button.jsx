//import PropTypes from 'prop-types'

const Button = ({fetchLoadMore }) =>{
    
    return(
    <div>
        <button type='button' onClick={()=>{fetchLoadMore()}}>Load more</button>
    </div>
    )
}
//console.log(123)
export default Button