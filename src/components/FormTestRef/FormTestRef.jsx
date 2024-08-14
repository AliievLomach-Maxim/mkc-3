import { forwardRef, useRef } from 'react'

const CustomInput = forwardRef((_, ref) => {
	return <input type='text' ref={ref} />
})

CustomInput.displayName = 'CustomInput'

// import React from 'react'

// const formContext = createContext()

// const Formik = ({children}) => {
// 	const [stateForm, setStateForm] = useState({})
// 	const handleChange = ({target:{value,name}}) => { setStateForm({...stateForm,[name]:value}) }
//   return (
// 	<formContext.Provider value={{
// 		handleChange
// ,setStateForm,stateForm	}}>
// {children}
// 	</formContext.Provider>
//   )
// }
// <Formik>
// 	input
// </Formik>

// export default Formik

const FormTestRef = () => {
	const inputRef = useRef()

	const handleCLick = () => {
		const rect = inputRef.current.getBoundingClientRect()

		window.scrollTo({
			top: rect.top,
			behavior: 'smooth',
		})
	}

	return (
		<div>
			<button onClick={handleCLick}>Focused</button>
			<hr />
			<hr />
			<hr />
			<hr />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae
				debitis a, nesciunt impedit illum, officiis commodi ipsam laborum illo
				harum ad animi quidem doloremque ullam dicta magni, repellat aliquam.
				Aspernatur debitis dolore praesentium maxime animi nostrum molestiae
				expedita, pariatur illum impedit quae atque explicabo ipsam sit
				eligendi, quibusdam repellendus nemo dicta natus culpa excepturi! Magnam
				suscipit reprehenderit natus accusantium. Unde molestiae alias eum
				perspiciatis beatae suscipit consectetur architecto impedit maxime minus
				magni nostrum quas tempora, fugit eligendi rerum nulla eos blanditiis.
				Non, dignissimos aperiam repellat molestias totam dicta. Provident.
				Debitis, accusamus beatae blanditiis a modi dolores. Minima nostrum
				suscipit assumenda laboriosam exercitationem voluptate voluptatem
				sapiente ipsum, quod aut, nisi hic incidunt sequi facilis voluptates
				placeat perspiciatis. Nemo, amet libero! Maxime quasi aliquid
				reprehenderit. Magnam enim est vel perferendis, ad ducimus sequi tempora
				necessitatibus explicabo fugiat qui voluptatibus eaque quos dolorum esse
				harum culpa obcaecati officiis provident excepturi rem quidem!
				Repellendus, nisi cupiditate exercitationem inventore, voluptatibus
				soluta assumenda sed eius, qui fuga nihil. Molestias a praesentium vitae
				voluptate eligendi et delectus quidem repudiandae cumque consequuntur
				iusto voluptates, eum neque repellat! Expedita pariatur non natus?
				Tempora dolor illo, sed soluta placeat saepe aut officiis earum
				distinctio quod perferendis! Eveniet iure doloremque sit qui aut nulla
				voluptatem, cupiditate modi assumenda praesentium incidunt. In,
				voluptate! Autem doloribus, impedit molestiae laboriosam nobis aliquam
				itaque aliquid. Alias excepturi cum sapiente, sit in ad quasi non quas
				molestias omnis saepe dolorum labore voluptatum nemo nisi quisquam. Ut
				earum, fuga explicabo ullam id officiis soluta quae illo quos accusamus
				libero illum consequuntur quo incidunt ab at deleniti debitis! Beatae
				laborum quasi voluptate recusandae ea dicta, sit ad. Accusantium
				obcaecati, molestiae sequi optio nam inventore illum animi aut
				asperiores architecto. Modi esse molestias repudiandae ea laudantium,
				repellat illo aliquid reprehenderit maiores cum ullam hic dolor nisi.
				Fuga, repellendus! Similique omnis sit dolor ut, blanditiis, quam
				corrupti veniam repudiandae aliquid deserunt deleniti minima officiis
				magnam labore quibusdam facere eos porro perferendis suscipit possimus.
				Odio vel accusantium animi pariatur iusto. Architecto, culpa, pariatur
				laborum explicabo aliquam, voluptas neque dicta consectetur nulla velit
				commodi omnis quisquam dolorem officia impedit iusto tempore accusantium
				laudantium nostrum eveniet officiis earum dolorum? Sapiente, facilis
				quas. Veniam nesciunt ullam accusamus nihil dolor ab mollitia, in vero
				doloremque, alias ex dolorem necessitatibus deserunt sit dolore
				aspernatur amet quos! Quae voluptates eius sed esse vitae neque labore
				delectus! Temporibus obcaecati velit libero ex at numquam
				exercitationem? Ipsum, iusto et voluptate necessitatibus laboriosam
				illum doloribus quam, distinctio libero at fugit voluptatem cumque, odit
				sunt aperiam ut eaque nostrum totam. Doloremque incidunt impedit
				voluptates placeat consequatur perspiciatis neque asperiores id esse,
				ipsa numquam inventore explicabo excepturi nulla earum ea rerum unde
				repudiandae vero totam voluptatibus dicta quasi eaque. Veritatis, quasi!
				Qui totam nobis cupiditate earum quaerat dolore illo, ad quam doloribus
				deleniti ducimus molestias culpa repellendus! Magni, recusandae libero
				corrupti reiciendis obcaecati, harum suscipit blanditiis voluptatem ex
				labore saepe iste. Ratione nam voluptatibus pariatur commodi quos
				assumenda quaerat, autem suscipit soluta! Ullam architecto ad eveniet
				quae hic nihil illum sequi iure unde dignissimos quos, ratione beatae
				quisquam dicta distinctio. Maxime! Saepe inventore commodi fugit
				blanditiis quo. Accusantium animi laboriosam blanditiis iusto distinctio
				eius earum dolor deserunt nam, laborum quae explicabo cupiditate?
				Veritatis, error facilis. Ab ea aut maxime deserunt non! Veritatis
				accusantium, ab dolores eum nesciunt quia, fugiat possimus doloribus
				error consequuntur vero consequatur ut delectus nihil minima numquam
				commodi qui neque in dolorem dolore. Ullam consequatur obcaecati at
				inventore. Necessitatibus neque earum ea culpa ipsa cupiditate dicta
				ducimus dolor dolorem quae iusto vitae quam, animi quasi sed recusandae
				sunt autem voluptates consequatur officia odio molestiae porro.
				Voluptatibus, quos quibusdam. Repudiandae cupiditate qui incidunt. Amet
				nulla, reiciendis labore enim cupiditate perspiciatis dolor quaerat
				veniam rerum illo quidem, illum unde eius ipsum quo sequi, nihil
				similique repellat fugit atque id! Perspiciatis. Voluptatibus impedit,
				magni earum molestiae praesentium voluptates itaque consequatur vel
				commodi nulla veniam quae fugit possimus assumenda sapiente dolores,
				veritatis dolor error fugiat non aspernatur provident at expedita!
				Dolorum, soluta! Eius sapiente eos itaque ullam blanditiis qui
				temporibus debitis maxime facilis unde molestias, porro amet iure
				similique quaerat eaque rerum quam saepe, animi nostrum? Aspernatur
				inventore distinctio laborum amet repellendus! Enim iusto eligendi ex ab
				necessitatibus dolor fugit soluta doloribus rem, est ratione pariatur
				facere deleniti accusantium aliquid officia architecto repellat eaque
				magnam, cumque quasi suscipit distinctio dolore. Aspernatur, mollitia!
				Odio at illum quos tempora laboriosam, dignissimos laborum nesciunt
				reprehenderit dolor, doloribus eligendi? Modi nemo architecto distinctio
				quis eum. Voluptates, tempore odit a aperiam corrupti architecto omnis
				consectetur iste nisi. Distinctio temporibus natus quibusdam accusamus!
				Quasi amet corporis laborum quibusdam sapiente. Minima, tenetur. Maiores
				tempore vitae quisquam ex, numquam asperiores tenetur. Quis illum magnam
				deserunt! Iusto blanditiis totam praesentium odio. Illo earum at
				reiciendis ullam quas aperiam tempora, maiores, ab adipisci hic incidunt
				unde natus nisi! Cum excepturi illo voluptates. Facere quas unde,
				maiores delectus error eos quis a consequatur. Commodi atque optio
				cupiditate amet sit necessitatibus ex corrupti ducimus. Nisi quasi
				vitae, tempora amet, placeat sunt necessitatibus, laborum sed illum
				nobis odio nam repellendus quos recusandae maxime libero hic?
				Consequatur voluptate minus neque blanditiis explicabo voluptatum
				tempora ipsum ipsam at, illum maiores magnam quasi. Deleniti, dolorum
				natus! Sapiente eveniet modi alias, repellendus necessitatibus quae
				corporis officiis ab ipsam magni. Est, modi mollitia, eius magni
				corrupti magnam deleniti ab numquam in ad repudiandae quia, placeat
				blanditiis sapiente dolorem quod maiores nemo eum fugiat nihil rem cum
				debitis officiis harum. Ut.
			</p>
			<form>
				{/* <input type='text' ref={inputRef} /> */}
				<CustomInput ref={inputRef} />
			</form>
		</div>
	)
}

export default FormTestRef
