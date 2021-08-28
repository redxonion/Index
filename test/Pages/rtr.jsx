import AnotherLayout from '@/layouts/second'

export default function Page() {
  return(
    <h1>Registration</h1>
  )
}

Page.getLayout = (page) => (
  <AnotherLayout>
{page}
  </AnotherLayout>
)	
