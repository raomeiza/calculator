import { Box, Button, Card, Typography } from '@mui/material'
function Plan(props: { title: string, price: number, features: string[], description: string, onClick: Function  | null }) {
  const { title, price, features, description, onClick } = props;
  return (
    <Card sx={{ p: 2, m: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '300px',minWidth: '300px', height: '300px' }} >
      <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{title}</Box>
      <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>#{price}</Box>
      <Typography>{description}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {features.map((feature) => (
          <Typography>{feature}</Typography>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={()=> {}}>Subscribe</Button>         
      </Card>
  )
}

const plans = [
  {title: 'Basic', price: 100, features: ['1', '2', '3'], description: 'Basic plan'},
  {title: 'flexi', price: 150, features: ['1', '2', '3'], description: 'Premium plan'}
]
export default function SubscriptionPlans() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'start',
        gap: 2,
        overflowX: 'scroll',
        // hide scroll bar
        overflow: '-moz-scrollbars-none',
      }}
    >
     { plans.map((plan) => (
        <Plan {...plan} onClick={null} />
      ))}
      
    </Box>
  )
}
