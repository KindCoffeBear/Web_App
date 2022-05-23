import './AboutUser.css'

function AboutUser({
  username, name, email, phone, website, company,
}) {
  return (
    <section className="detailedUser__about">
      <div />
      <div className="detailedUser__username">{username}</div>
      <div />
      <div />
      <div className="detailedUser__name">{name}</div>
      <div className="detailedUser__email">{email}</div>
      <div className="detailedUser__phone">{phone}</div>
      <div className="detailedUser__website">{website}</div>
      <div className="detailedUser__company">
        {company.name}
        ,
        {' '}
        {company.bs}
      </div>
      <div />
    </section>
  )
}

export default AboutUser
