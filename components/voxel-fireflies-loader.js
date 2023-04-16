import { forwardRef } from "react";
import { Spinner, Box } from "@chakra-ui/react";

export const FirefliesSpinner = () => (
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
export const FirefliesContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-fireflies"
    m="auto"
    mt={['-20px', "-60px", '-120px']}
    mb={['-40px', "-140px", '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <FirefliesContainer>
      <FirefliesSpinner />
    </FirefliesContainer>
  )
}

export default Loader