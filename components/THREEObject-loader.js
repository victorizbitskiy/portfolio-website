import { forwardRef } from "react";
import { Spinner, Box } from "@chakra-ui/react";

export const THREEObjectSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

// eslint-disable-next-line react/display-name
export const THREEObjectContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="THREEObject"
    m="auto"
    mt={['10px', "-60px", '-120px']}
    mb={['-100px', "-140px", '-270px']}
    w={[350, 480, 640]}
    h={[350, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <THREEObjectContainer>
      <THREEObjectSpinner />
    </THREEObjectContainer>
  )
}

export default Loader