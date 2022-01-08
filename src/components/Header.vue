<template>
  <nav class="skew-menu" :class="{ 'skew-menu-small': isSmall }">
    <ul>
      <li><router-link to="/">Characters</router-link></li>
      <li><router-link to="/locations">Locations</router-link></li>
      <li><router-link to="/episodes">Episodes</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isSmall: false
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSmall = window.scrollY > 0
    }
  }
}
</script>
<style lang="scss">
$breakpoint-tablet: 768px;

.skew-menu {
  position: sticky;
  top: 0;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(29, 29, 29);
  z-index: 2;
  transition: 0.6s;
  height: 6em;

  & > .mobile {
    display: none;
  }

  &-small {
    height: 3em;

    & a {
      padding: 0.3em 1em !important;
      font-size: 0.8em;
    }
  }

  & ul {
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
    transform: skew(-25deg);

    & li {
      background: #fff;
      float: left;
      border-right: 1px solid #eee;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      text-transform: uppercase;
      color: #555;
      font-weight: bolder;
      transition: all 0.3s linear;

      &:first-child {
        border-radius: 0.7em 0 0 0.7em;
      }

      &:last-child {
        border-right: none;
        border-radius: 0 0.7em 0.7em 0;
      }

      &:hover {
        background: #eee;
        color: chartreuse;
      }

      a {
        display: block;
        padding: 1em 2em;
        color: inherit;
        text-decoration: none;
        transform: skew(25deg);
        user-select: none;
        transition: 0.6s;
        &.router-link-exact-active {
          color: chartreuse;
        }
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .skew-menu {
    height: 3em;

    & a {
      padding: 0.3em 1em !important;
      font-size: 0.8em;
    }
  }
}
</style>