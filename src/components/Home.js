import React, { Component} from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            session: false,
            product: []
        }
    }
    componentDidMount(){
        axios.get('/api/products').then(response => {
            this.setState({products: response.data})
        })
        axios.get('/api/getSession').then(response => {
            console.log(response)
            if(response.data.user.username){
                this.setState({session: true})
            }
        })
    }
    handleClick(){
        if(this.state.session){
            axios.post(`/api/cart/${id}`).then(response =>{
            })
        } else {
            this.props.history.push('/Login')
        }
    }

    render(){
        let itemList = this.state.products.map(product => {
            return 
            <div key={product.id} className='Card'>
            <img/>
            <h3>Product Name</h3>
            <h4>${product.price}</h4>
            <button className='addToCart' onClick={() => this.handleClick(product.id)}>Add To Cart</button>
            </div>
        })
        return (
            <div>
                <div className= 'Item_List'>
                    {itemList}
                </div>
            </div>
        )
    }
}
export default Home;