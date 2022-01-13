import '@testing-library/jest-dom/extend-expect';
jest.mock('vue-router', () => ({
  useRouter: jest.fn(() => ({
    push: () => {}
  }))
}))