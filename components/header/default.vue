<template lang='pug'>
header.bg-light
    nav#header-nav.navbar.navbar-expand-lg.navbar-light.bg-light(role='navigation')
        //- .container
            //- a.link-dark.navbar-brand.site-title.mb-0(href='#') Matheus Esturiao
            button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
            //- span.navbar-toggler-icon

            #navbarSupportedContent.collapse.navbar-collapse
            ul.navbar-nav.ms-auto.me-2
                li.nav-item
                a.nav-link(href='#about') Sobre
                li.nav-item
                a.nav-link(href='#services') Serviços
                li.nav-item
                a.nav-link(href='#skills') Habilidades
                li.nav-item
                a.nav-link(href='#experience') Experiência
                li.nav-item
                a.nav-link(href='#contact') Contato
</template>

<script>
    export default {  }
</script>