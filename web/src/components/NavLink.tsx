/** @jsx jsx */
import Link from 'gatsby-plugin-transition-link'
import { jsx } from 'theme-ui'

export default (props) => (
  <Link {...props} activeClassName="active" partiallyActive sx={{ variant: 'links.nav' }} />
)
