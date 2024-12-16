
import { setActivePinia, createPinia } from 'pinia'
import  {useLoginStore, ModalStore} from "@/store";
import {getUserFromLocalStorage, setUserToLocalStorage} from "@/utils/utils";
import {adminUser, normalUser} from "./Fixtures";
jest.mock("@/utils/utils", () => (
        {
            getUserFromLocalStorage:jest.fn(),
            setUserToLocalStorage:jest.fn()
        }
    )
)
const mockedgetUserFromLocalStorage = getUserFromLocalStorage as jest.Mock
const mockedSetUserToLocalStorage = setUserToLocalStorage as jest.Mock
describe("Test the Login Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("The isLoggedIn state sets correctly", () => {
        //
        mockedgetUserFromLocalStorage.mockReturnValue(normalUser)
        const loginStore = useLoginStore()
        expect(loginStore.isLoggedIn).toBe(true)

    })
    it("The isLoggedIn state is false, when local storage is empty", () => {
        //
        mockedgetUserFromLocalStorage.mockReturnValue(null)
        const loginStore = useLoginStore()
        expect(loginStore.isLoggedIn).toBe(false)
    })

    it("The  store correctly set isAdmin state" ,() => {
        mockedgetUserFromLocalStorage.mockReturnValue(adminUser)
        const loginStore = useLoginStore()
        expect(loginStore.isAdmin).toBe(true)
    })
    it("The store correctly set isAdmin state for a normal user" ,() => {
        mockedgetUserFromLocalStorage.mockReturnValue(normalUser)
        const loginStore = useLoginStore()
        expect(loginStore.isAdmin).toBe(false)
    })
    it("The toggleLogin correctly toggles the isLoggedIn state",() => {
        mockedgetUserFromLocalStorage.mockReturnValue(normalUser)
        const loginStore = useLoginStore()
        const prevIsLoggedIn = loginStore.isLoggedIn
        loginStore.toggleLogin()
        const currentIsLoggedIn = loginStore.isLoggedIn
        expect(!prevIsLoggedIn).toBe(currentIsLoggedIn)
    })


})

describe("Test the ModalStore" ,() => {
    beforeEach(()=> {
        setActivePinia(createPinia())
    })
    it("Toggle Login Modal correctly sets isModalOpen state",()=> {

        const modalStore = ModalStore()
        const previousIsModalOpen = modalStore.isModalOpen
        modalStore.toggleLoginModal()
        const currentIsModalOpen = modalStore.isModalOpen
        expect(!previousIsModalOpen).toBe(currentIsModalOpen)


    })

})