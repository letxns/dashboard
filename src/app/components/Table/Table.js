import { useRef } from "react";

const Table = () => {
    const table = useRef(null);
    return (
        <table className="m-2" ref={table}>
            <thead>
                <tr>
                    <th>Supplier</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Supplier 1</td>
                    <td>20 Cooper Square, New York, NY 10003, USA</td>
                    <td>1-212-456-7890</td>
                </tr>
                <tr>
                    <td>Supplier 2</td>
                    <td>26 Washington Pl, New York, NY 10003, USA</td>
                    <td>1-212-689-2345</td>
                </tr>
                <tr>
                    <td>Supplier 3</td>
                    <td>35 W 4th St, New York, NY 10012, USA</td>
                    <td>1-212-264-3465</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;