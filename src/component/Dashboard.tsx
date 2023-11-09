import * as React from 'react';
import { UserContext } from '../context/userContext';
import { Box, Card, Typography, IconButton, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function Dashboard() {
  const [hideBallance, setHideBallance] = React.useState(true)
  const { user, token } = React.useContext(UserContext);  
  return (
    <Box 
      sx={{
        width: '100%',
        overflw: 'hidden'
      }}
      >
        <Card
          sx={{
            width: '100%',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            gap: 2,
            paddingY: 3
          }}
          
          elevation={3}
        >
           <Typography fontWeight={'bold'} fontSize={'1.5rem'} variant='h3'>{'A Omeiza'}</Typography>
           <Typography fontWeight='bold' fontSize={'1rem'} variant='h3' component='a' href={user ? `mailto://${user.email}` : 'mailto'}>{user ? user.email : 'no email'} </Typography>
           <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              minWidth: '200px'
            }}
          >
            <IconButton aria-label="hide" onClick={()=>setHideBallance(!hideBallance)}>
              {
                hideBallance ? <VisibilityIcon /> : <VisibilityOffIcon/>
              }
            </IconButton>
           <Typography fontWeight={'bold'} fontSize={'2rem'} variant='h2'>{
            hideBallance ? '*****' : '#553.045'
           }</Typography>
          </Box>
           <br />
           <Button variant='contained'>top up</Button>
        </Card>
      </Box>
  )
}