import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  orgs: [],
  users: [],
  repos: [],
};

const getters = {
  getOrgs(state) {
    return state.orgs;
  },
  getUsers(state) {
    return state.users;
  },
  getRepos(state) {
    return state.repos;
  },
};

const mutations = {
  setOrgs(state, orgs) {
    state.orgs = orgs;
  },
  addOrg(state, org) {
    state.orgs.push(org);
  },
  setUsers(state, users) {
    state.users = users;
  },
  addUser(state, user) {
    state.users.push(user);
  },
  setRepos(state, repos) {
    state.repos = repos;
  },
  addRepo(state, repo) {
    state.repos.push(repo);
  },
  sortReposByPrDesc(state) {
    console.log("sorting... ");

    state.repos.sort((repo1, repo2) => repo2.pr_count - repo1.pr_count);
  },
};

const actions = {
  fetchOrgs({ commit }) {
    axios
      .get("https://api.github.com/organizations?page=1&per_page=3")
      .then((response) => {
        // commit("setOrgs", response.data);
        for (let res of response.data) {
          axios
            .get(`https://api.github.com/orgs/${res.login}`)
            .then((response2) => {
              const res2 = response2.data;
              const org = {
                login: res.login,
                name: res2.name,
                repos: res2.public_repos,
                followers: res2.followers,
                created_at: res2.created_at,
              };
              commit("addOrg", org);
            });
        }
      })
      .catch((err) => console.log(err));
  },
  fetchUsers({ commit }) {
    axios
      .get("https://api.github.com/users?page=1&per_page=2")
      .then((response) => {
        for (let res of response.data) {
          axios
            .get(`https://api.github.com/users/${res.login}`)
            .then((response2) => {
              const res2 = response2.data;
              const user = {
                login: res.login,
                avatar_url: res.avatar_url,
                name: res2.name,
                created_at: res2.created_at,
              };
              commit("addUser", user);
            });
        }
      })
      .catch((err) => console.log(err));
  },
  fetchRepos({ commit }) {
    axios
      .get("https://api.github.com/repositories?page=1&per_page=2")
      .then((response) => {
        console.log(response.data);

        for (let res of response.data) {
          const req1 = `https://api.github.com/repos/${res.full_name}`;
          const req2 = `https://api.github.com/search/issues?q=repo:${res.full_name}+type:issue+state:closed`;
          const req3 = `https://api.github.com/search/issues?q=repo:${res.full_name}+type:pr+state:open`;
          const req4 = `https://api.github.com/repos/${res.full_name}/commits?page=1&per_page=1`;

          axios.all([req1, req2, req3, req4]).then(
            axios.spread((...responses) => {
              const res1 = responses[0].data;
              const res2 = responses[1].data;
              const res3 = responses[2].data;
              const res4 = responses[3].data;

              const repo = {
                name: res.name,
                full_name: res.full_name,
                pr_count: res3.total_count,
                stargazers_count: res1.stargazers_count,
                open_issues_count: res1.open_issues_count,
                closed_issues_count: res2.open_issues_count,
                last_commit: res4.commit.commiter.date,
              };
              commit("addRepo", repo);
              console.log(repo);
            })
          );
        }
      })
      .catch((err) => console.log(err));
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // modules,
});
