import React, { Component } from 'react'

export default class Listing extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Crated At</th>
                        <th scope="col">Update At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Cat 1</td>
                            <td>Active</td>
                            <td>Date</td>
                            <td>Date</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Cat 1</td>
                            <td>Active</td>
                            <td>Date</td>
                            <td>Date</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Cat 1</td>
                            <td>Active</td>
                            <td>Date</td>
                            <td>Date</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}
