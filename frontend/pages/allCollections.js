import { Heading, Container, Divider } from '@chakra-ui/react'
import { Fragment } from 'react'

const AllCollections = props => (
  <Fragment>
    <Container>
      <Heading>New Collections</Heading>
      <Divider my={2} />
      <Heading>Ongoing Collections</Heading>
      <Divider my={2} />
      <Heading>All Collections</Heading>
    </Container>
  </Fragment>
)

export default AllCollections
