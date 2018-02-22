import React, {Component} from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderColumn
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Home extends Component {
  constructor (props) {
    super(props)
  }
  render () {

    return(
      <div>

        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <MuiThemeProvider>
                <Table>
                  <TableHeader displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>Name</TableHeaderColumn>
                      <TableHeaderColumn>Amount</TableHeaderColumn>
                      <TableHeaderColumn>Transaction</TableHeaderColumn>
                      <TableHeaderColumn>Category</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                </Table>
              </MuiThemeProvider>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Home;
