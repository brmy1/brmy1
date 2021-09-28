<template lang="pug">
div
  header-default
  header
    .cover.bg-light
      .container.px-3
        .row
          .col-lg-6.p-2
            img.img-fluid(src='images/illustrations/hello3.svg' alt='hello')
          
          .col-lg-6
            .mt-5
              p.lead.text-uppercase.mb-1 Olá!
              h1.intro-title.marker(data-aos='fade-left' data-aos-delay='50') Me chamo Matheus.
              p.lead.fw-normal.mt-3(data-aos='fade-up' data-aos-delay='100') Sou um programador 
                b FullStack.&nbsp;
                small Java Script, Dart, Phyton, GraphQL. HTML, CSS, SASS, PUG, VUE, NEXT, REACT. NoSQL e SQL.
                br
                br
                small Você ficará por dentro de toda minha experiencia como programador, nessa caminhada de um pouco mais de 10 anos.

              //- .social-nav(data-aos='fade-up' data-aos-delay='200')
                nav(role='navigation')
                  ul.nav.justify-content-left
                    li.nav-item
                      a.nav-link(href='https://twitter.com/templateflip' title='Twitter')
                        i.fab.fa-twitter
                        span.menu-title.sr-only Twitter
                    li.nav-item
                      a.nav-link(href='https://www.facebook.com/templateflip' title='Facebook')
                        i.fab.fa-facebook
                        span.menu-title.sr-only Facebook
                    li.nav-item
                      a.nav-link(href='https://www.instagram.com/templateflip' title='Instagram')
                        i.fab.fa-instagram
                        span.menu-title.sr-only Instagram
                    li.nav-item
                      a.nav-link(href='https://www.linkedin.com/' title='LinkedIn')
                        i.fab.fa-linkedin
                        span.menu-title.sr-only LinkedIn
                    li.nav-item
                      a.nav-link(href='https://www.behance.net/templateflip' title='Behance')
                        i.fab.fa-behance
                        span.menu-title.sr-only Behance

              //- .mt-3(data-aos='fade-up' data-aos-delay='200')
                a.btn.btn-primary.shadow-sm.mt-1.hover-effect(href='#contact')
                  | Ver mais?&nbsp;&nbsp; 
                  i.fas.fa-arrow-right
    .wave-bg

</template>

<script>
export default {
  data () {
    return {}
  },
  name: 'indexPage'
}
</script>
