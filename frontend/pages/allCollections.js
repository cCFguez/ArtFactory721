import { Heading, Container, Divider } from '@chakra-ui/react'
import { Fragment } from 'react'
import Collection from '../components/collection/collection'

const AllCollections = props => (
  <Fragment>
    <Container>
      <Heading>New Collections</Heading>
      <Divider my={2} />
      <Heading>Ongoing Collections</Heading>
      <Divider my={2} />
      <Heading>All Collections</Heading>
      <Collection />
    </Container>
  </Fragment>
)

export default AllCollections
