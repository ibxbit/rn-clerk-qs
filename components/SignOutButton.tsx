import { TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons'
import { useSignOut } from '@/hooks/useSignOut'

const SignOutButton = () => {
    const {handleSignOut}= useSignOut()
  return (
    <TouchableOpacity onPress={handleSignOut}>
      <AntDesign name="logout" size={24} color="black" />
    </TouchableOpacity>
  )
}

export default SignOutButton