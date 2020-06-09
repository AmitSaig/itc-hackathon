import React, { Component } from 'react';
import { businesses } from '../lib/CorPortunityFunctions'

class Businesses extends Component {
    constructor() {
        super();
        this.state = {
            businesses: []
        }
    }

    componentDidMount() {
        this.loadBusinesses()
    }

    loadBusinesses = async () => {
        const response = await businesses()
        this.setState({
            businesses: [response.data]
        })
    }

    render() {
        return (
            <div>
                {this.state.businesses.map((el) => el.businesses.map((c, i) => (
                    <div key={i}>
                        <div>{c.business_name}</div>
                        <div>{c.industry}</div>
                        <div>{c.number_of_employees}</div>
                        <div>{c.address}</div>
                        <div>{c.contact_name}</div>
                        <div>{c.phone}</div>
                        <p>{c.description}</p>
                    </div>
                )))}
            </div>
        )
    }
}

export default Businesses