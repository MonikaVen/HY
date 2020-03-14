import React from 'react'
import classes from './Sections.module.css';
import { Section, Columns, Card, List, Image, Media, Table} from 'react-bulma-components';
import needs from './graphics/product/needs.jpg'
import modern from './graphics/product/modern.jpg'
import data from './graphics/product/data.jpg'
import safety from './graphics/product/safety.jpg'
import ProductCard from './ProductCard.js'
const Product = () => {
    return (
<Section className={classes.section}>
          <div className={classes.sectionTitle}>Our insurance solution</div>
        <Columns>
          <Columns.Column size={1}>
          </Columns.Column>
          <Columns.Column size={5}>
            <ProductCard title="Takes care of your needs" image={needs} points={["Physical damage coverage", "Bodily injury in an accident coverage", "Protection from accidents caused by the weather and natural disaster."]} />
          </Columns.Column>
          <Columns.Column size={5}>
            <ProductCard title="Goes hand in hand with a modern car" image={modern} points={["Cyber security incident coverage", "Lower price for autonomous kilometers driven", "Lower insurance for the new car models - we base our model on the car safety rather than history."]} />
          </Columns.Column>
          <Columns.Column size={1}>
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={1}>
          </Columns.Column>
          <Columns.Column size={5}>
            <ProductCard title="We protect your data" image={data} points={["We do not share your driving data with other companies", "Driving test for the initial offer takes only 30 hours of driving", "No more biased judgement on your profession, gender, marital status or age discrimination." ]}/>  
          </Columns.Column>
          <Columns.Column size={5}>
            <ProductCard title="Your safety is our goal" image={safety} points={["Recommendations based on weather", "Automated road quality alerts based on the real-time data", "Lower price if you are respectful towards traffic rules. If you prefer taking low-risk routes, you save even more."]}/>
          </Columns.Column>
          <Columns.Column size={1}>
          </Columns.Column>
        </Columns>
      </Section>
    )
}

export default Product