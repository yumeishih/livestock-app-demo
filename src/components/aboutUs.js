import React from 'react'

const infoHtml = (
  <div>
    <p>
      The International Cooperation and Development Fund (TaiwanICDF) is dedicated to boosting
      socio-economic development, enhancing human resources and promoting economic relations in a
      range of developing partner countries. We also offer humanitarian assistance and provide aid
      in the event of natural disasters or international refugee crises.
    </p>
    <p>
      To carry out our mission, we offer a range of assistance that centers on four core
      operations:&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/lp.asp?ctNode=29824&CtUnit=172&BaseDSD=100&mp=2">lending and investment</a>,&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/lp.asp?ctNode=29823&CtUnit=172&BaseDSD=100&mp=2">technical cooperation</a>,&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/lp.asp?ctNode=29819&CtUnit=172&BaseDSD=100&mp=2">humanitarian assistance</a>,&nbsp; and&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/lp.asp?CtNode=30019&CtUnit=172&BaseDSD=100&mp=2">international education and training</a>.
      Our Fund is used to make direct or indirect investments and to finance lending operations.
      Revenues generated by the Fund are used to support our bilateral or multilateral technical
      cooperation projects, humanitarian assistance operations and education and training.
    </p>
    <p>
      Every new project from the TaiwanICDF proceeds according to a rigorous project cycle
      and is backed by mutual covenants signed in cooperation with relevant stakeholders.
      Our projects are designed to address the strategic development goals of each of our
      partner countries, pay due consideration to associated regional trends,
      and maximize results by employing the right combination of capital and technical cooperation.
    </p>
    <p>
      Ultimately, our work is tailor-made to the local needs of each partner country.
      Our assistance covers a variety of contemporary development issues such as&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/ct.asp?xItem=12408&ctNode=29857&mp=2">environment</a>,&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/lp.asp?ctNode=29858&CtUnit=193&BaseDSD=7&mp=2">public health</a>,&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/lp.asp?ctNode=29859&CtUnit=194&BaseDSD=7&mp=2">agriculture</a>,&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/lp.asp?ctNode=29860&CtUnit=195&BaseDSD=7&mp=2">education</a> and&nbsp;
      <a target="_nwMof" href="http://www.icdf.org.tw/lp.asp?ctNode=30130&CtUnit=300&BaseDSD=7&mp=2">information and communications technology</a>.
    </p>
    <p>
      We are also acting to improve human resources and build institutional capacity at
      the TaiwanICDF itself. We believe that as a stronger, more professional organization,
      we will be better placed to advise decision-making bodies within our government.
      Efforts to improve our own organization will also help us to deepen the coverage of
      our projects and transfer technological know-how on to our partners.
      We aspire to making the most effective use of manpower and resources,
      and replicating and adapting successful experiences from one partner country to another.
    </p>
    <p>
      The TaiwanICDF is headquartered in Taipei, Taiwan. As of December 31, 2017,
      we have 112 domestic employees and 150 staff working at overseas missions.
    </p>
  </div>
)

const AboutUs = () => {
  return (
    <div id="aboutUs" className="container">
      <h3 className="text-center">About Us</h3>
      {infoHtml}
    </div>
  )
}

export default AboutUs
