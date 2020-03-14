import React from "react";
import './CardSickness.css';

type Card = {
  name: string;
  img?: string;
  scNotation: string;
  descrip: string;
};

const CardSickness = (props: Card) => (
    <div className="card">
      <table className="table">
        <thead>
          <tr>
            <th colSpan={2}>{props.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Image</strong> </td>
            <td className="showInfo">
              <img src={props.img} alt={props.name} />
            </td>            
          </tr>
          <tr>
            <td><strong>Scientific Notation</strong> </td>           
            <td>{props.scNotation}</td>
          </tr>
          <tr>
            <td><strong>Description</strong></td>
            <td>{props.descrip}</td>
          </tr>
        </tbody>
      </table>
    </div>
);

/** Card built with functions
function CardSickness(props: Card) {
  return (
    <div className="card">
      <table className="table">
        <thead>
          <tr>
            <th colSpan={2}>{props.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Image</strong> </td>
            <td className="showInfo">
              <img src={props.img} alt={props.name} />
            </td>            
          </tr>
          <tr>
            <td><strong>Scientific Notation</strong> </td>           
            <td>{props.scNotation}</td>
          </tr>
          <tr>
            <td><strong>Description</strong></td>
            <td>{props.descrip}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
*/

export default CardSickness;

/**
 * name
 * img
 * scintedyNotation
 * Descrip
 */
