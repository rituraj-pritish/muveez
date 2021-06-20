import React, { useState } from 'react'
import { useQuery } from 'react-query'

import Button from 'components/common/ui/Button'
import Input from 'components/common/ui/Input'
import FlexBox from 'components/common/ui/FlexBox'
import useAuthentication from 'hooks/useAuthentication'

const Login = () => {
	const { login } = useAuthentication()

	const [username, setUsername] = useState('uniqueJohnDoe21')
	const [password, setPassword] = useState('123456')

	const { refetch: handleClick, isFetching } = useQuery(
		'login',
		() => login({ username, password }),
		{ enabled: false }
	)

	return (
		<FlexBox
			flexDirection='column'
			p={3}
			mx='auto'
			width='100%'
			maxWidth={400}
		>
			<Input
				label='Username'
				value={username}
				onChange={setUsername}
				mb={3}
			/>
			<Input
				label='Password'
				value={password}
				type='password'
				onChange={setPassword}
			/>
			<FlexBox
				mt={3}
				justifyContent='flex-end'
			>
				<Button
					isLoading={isFetching}
					onClick={handleClick}
				>
          Login
				</Button>
			</FlexBox>
		</FlexBox>
	)
}

export default Login
