import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies online Watch movies online Watch movies online Watch movies online"
		>
			<Heading
				title="Watch movies online"
				className="bg-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
