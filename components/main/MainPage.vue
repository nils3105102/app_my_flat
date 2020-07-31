<template>
  <div>
    <Header />
    <Promo />
    <Opportunities />
    <Users />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/Header"
import Promo from "@/components/Promo/Promo"
import Opportunities from "@/components/Opportunities/Opportunities"
import Users from "@/components/Users/Users"
import Footer from "@/components/Footer/Footer"

export default {
  components: {
    Header,
    Promo,
    Opportunities,
    Users,
    Footer
  }
}
</script>
