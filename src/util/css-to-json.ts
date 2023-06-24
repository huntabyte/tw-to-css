import postcss from "postcss"
import postcssJs from "postcss-js"

export function cssToJson(css: string) {
	const root = postcss.parse(css)
	return postcssJs.objectify(root)
}
