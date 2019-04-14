import React from 'react'

const getFullName = (firstName, lastName) => {
  return firstName + ' ' + lastName
}

const Admin = props => {
  const { haha, eeee } = props
  const elements = (
    <div style={{ fontSize: '20px' }}>
      {getFullName(haha.first, haha.last)}
      <div>
        <p
          style={{
            color: 'brown',
            fontStyle: haha.email ? 'arial' : 'italic',
          }}
        >
          {eeee}
          {haha.email || 'Không có email'}
        </p>
      </div>
    </div>
  )

  return elements
}

export default Admin
