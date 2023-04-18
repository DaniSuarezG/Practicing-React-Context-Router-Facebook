import './TransparentButton.css'

function TransparentButton({ icon, text }) {
  return (
    <div className='btn-transparent'><span className="icon">{ icon }</span> { text }</div>
  )
}

export default TransparentButton