import React, { useState } from "react";
import img from '../../../assets/image_girl.png'
import "./UserDetails.scss"

const UserDetails = () => {
  const initialData = [
    {
      id: 1,
      user: {
        name: "Sierra Ferguson",
        phone: "+998 (93) 486-46-15",
        image: ""
      },
      carComfort: "simple",
      orderedTime: "04.12.2021 20:30",
      startLocation: "ул. Беш Агач, Furkat Street, Tashkent, Uzbekistan",
      finishLocation: "ул. Беш Агач, Furkat Street, Tashkent, Uzbekistan",
      income: "$20"
    },
    {
      id: 2,
      user: {
        name: "Sierra Ferguson",
        phone: "+998 (93) 486-46-15",
        image: ""
      },
      carComfort: "extra",
      orderedTime: "04.12.2021 20:24",
      startLocation: "21 Hamidulla Oripov ko'chasi, Toshkent, Uzbekistan",
      finishLocation: "21 Hamidulla Oripov ko'chasi, Toshkent, Uzbekistan",
      income: "$35"
    },
    {
      id: 3,
      user: {
        name: "Sierra Ferguson",
        phone: "+998 (93) 486-46-15",
        image: ""
      },
      carComfort: "convenient",
      orderedTime: "04.12.2021 20:23",
      startLocation: "76 Farobiy koʻchasi, Toshkent, Uzbekistan",
      finishLocation: "76 Farobiy koʻchasi, Toshkent, Uzbekistan",
      income: "$25"
    },
    {
      id: 4,
      user: {
        name: "Sierra Ferguson",
        phone: "+998 (93) 486-46-15",
        image: ""
      },
      carComfort: "convenient",
      orderedTime: "17.11.2021 12:19",
      startLocation: "13 Kumush ko'chasi, Tashkent, Uzbekistan",
      finishLocation: "13 Kumush ko'chasi, Tashkent, Uzbekistan",
      income: "$30"
    },
    {
      id: 5,
      user: {
        name: "Sierra Ferguson",
        phone: "+998 (93) 486-46-15",
        image: ""
      },
      carComfort: "convenient",
      orderedTime: "04.12.2021 20:30",
      startLocation: "1 Kuyli Tolariq ko'chasi, Tashkent, Uzbekistan",
      finishLocation: "1 Kuyli Tolariq ko'chasi, Tashkent, Uzbekistan",
      income: "$28"
    }
  ];

  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(4);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" />
            </th>
            <th scope="col">User</th>
            <th scope="col">Car Comfort</th>
            <th scope="col">Ordered Time</th>
            <th scope="col">Start Location</th>
            <th scope="col">Finish Location</th>
            <th scope="col">Income</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <img
                  src={img}
                  alt={row.user.name}
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <div>{row.user.name}</div>
                <div>{row.user.phone}</div>
              </td>
              <td>{row.carComfort}</td>
              <td>{row.orderedTime}</td>
              <td>{row.startLocation}</td>
              <td>{row.finishLocation}</td>
              <td>{row.income}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a onClick={() => paginate(currentPage - 1)} className="page-link" href="#!">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a onClick={() => paginate(1)} className="page-link" href="#!">
              1
            </a>
          </li>
          <li className="page-item">
            <a onClick={() => paginate(2)} className="page-link" href="#!">
              2
            </a>
          </li>
          <li className="page-item">
            <a onClick={() => paginate(currentPage + 1)} className="page-link" href="#!">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserDetails;
