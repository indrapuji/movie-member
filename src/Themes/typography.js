import { StyleSheet } from 'react-native'
import fonts from './fonts'

const typography = StyleSheet.create({
   h1: {
      fontSize: 24,
      fontFamily: fonts.PoppinsBold,
   },
   h2: {
      fontSize: 24,
      fontFamily: fonts.PoppinsSemiBold,
   },
   btnText: {
      fontFamily: fonts.PoppinsBold,
      fontSize: 18,
      letterSpacing: 1,
   },
})

export default typography
