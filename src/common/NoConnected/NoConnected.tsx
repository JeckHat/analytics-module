import { Button, Grid, Typography } from '@mui/material'
import { noConnectedIcon } from '@static/icons'
import { useStyles } from './style'
import { useLocation, useNavigate } from 'react-router-dom'
import ChangeWalletButton from '@components/Header/HeaderButton/ChangeWalletButton'
import { ROUTES } from '@utils/utils'
import { useDispatch } from 'react-redux'
import { actions } from '@store/reducers/navigation'

export interface INoConnected {
  onConnect: () => void
  title?: string
  descCustomText?: string
}

export const NoConnected: React.FC<INoConnected> = ({ onConnect, title, descCustomText }) => {
  const { classes, cx } = useStyles()
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
      <Grid className={cx(classes.blur, 'blurLayer')} />
      <Grid className={cx(classes.container, 'blurLayer')}>
        <Grid className={cx(classes.root, 'blurInfo')}>
          <Grid height={104}>
            <img className={classes.img} src={noConnectedIcon} alt='Not connected' />
          </Grid>
          {!!title && <Typography className={classes.desc}>{title}</Typography>}

          {descCustomText?.length && (
            <Typography className={classes.desc}>{descCustomText}</Typography>
          )}
          <Button
            className={classes.buttonPrimary}
            onClick={() => {
              dispatch(actions.setNavigation({ address: location.pathname }))
              navigate(ROUTES.getNewPositionRoute('0_01'))
            }}
            variant='contained'>
            Explore pools
          </Button>

          <ChangeWalletButton
            name='Connect wallet'
            onConnect={onConnect}
            connected={false}
            onDisconnect={() => {}}
            className={classes.buttonSecondary}
            textClassName={classes.buttonText}
          />
        </Grid>
      </Grid>
    </>
  )
}
