import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icon.types'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	// if ((<IconComponent />)) return <IconComponent />
	// else return <MaterialIcons.MdDragIndicator />

	// const IconComponent = name
	// 	? MaterialIcons[name]
	// 	: MaterialIcons.MdDragIndicator

	return <IconComponent />
}
export default MaterialIcon
