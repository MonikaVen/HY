import React from 'react'
import { Section, Columns, Card, List, Image, Media, Table} from 'react-bulma-components';
const ProductCard = (props) => {
    return(
        <Card>
        <div style={{padding: '40px'}}>
        <Media>
        <Media.Item>
          <div style={{ width: 250 }}>
            <Image rounded src={props.image}></Image>
          </div>
        </Media.Item>
        <Media.Item>
            <h2> </h2>
              <Table>
                <thead>
                  <tr>
                  <th>{props.title}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>{props.points[0]}</td></tr>
                  <tr><td>{props.points[1]}</td></tr>
                  <tr><td>{props.points[2]}</td></tr>
                  <tr><td>{props.points[3]}</td></tr>
                </tbody>
              </Table>
        </Media.Item>
      </Media>
      </div>
    </Card>
    )
}

export default ProductCard