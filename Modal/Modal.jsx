import '../Modal/Modal.css'

function Modal() {
	return (
		<div
			className={active ? 'modal active' : 'modal'}
			onClick={() => setActve(false)}
		>
			<div
				className={active ? 'modal__content active' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}
			>
				<h1>abu</h1>
			</div>
		</div>
	)
}
export default Modal
