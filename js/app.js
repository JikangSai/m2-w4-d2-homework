// Vue Local Component: Navbar
Vue.component('nav-bar', {
  template: `
    <nav class="navbar navbar-expand-sm navbar-light">
      <a class="navbar-brand" href="#">Food Blog</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
            <a class="nav-link" :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  data: function() {
    return {
      navLinks: [
        { text: 'Home', href: '#' },
        { text: 'Recipes', href: '#' },
        { text: 'Lifestyles', href: '#' },
        { text: 'Videos', href: '#' },
        { text: 'About', href: '#' }
      ]
    };
  }
});

// Main Vue Instance
new Vue({
  el: '#app',
  data: {
    chiliImage: 'images/chili.jpg',
    comments: [
      {
        author: 'Brianna',
        date: 'February 18, 2021 @ 3:30 pm',
        text: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs.'
      },
      {
        author: 'LINH',
        date: 'February 15, 2021 @ 9:46 am',
        text: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.'
      },
      {
        author: 'CATHERINE LEONARDO',
        date: 'February 13, 2021 @ 12:58 pm',
        text: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread.'
      },
      {
        author: 'KALI',
        date: 'February 13, 2021 @ 11:31 am',
        text: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot.'
      }
    ]
  }
});
