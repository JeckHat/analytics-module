import { theme } from '@static/theme'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '60vh',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    maxWidth: '100%',

    [theme.breakpoints.down('lg')]: {
      paddingInline: 40
    },

    [theme.breakpoints.down('sm')]: {
      paddingInline: 8
    }
  }
}))
