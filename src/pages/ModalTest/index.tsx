import {Modal, ModalContent, ModalAction, Button} from '../../theme/daisyui'
import * as D from '../../data'

export default function ModalTest() {
  const open = true
  const closeClicked = () => alert('closeClicked')
  const acceptClicked = () => alert('acceptClicked')

  return (
    <section className="mt-4">
      <title>ModalTest</title>
      <Modal open={open}>
        <ModalContent onCloseIconClicked={closeClicked}>
          <title>Modal</title>
          <p className="mt-4 text-justify">{D.randomparagraphs()}</p>
          <ModalAction>
            <Button
              className="mt-4 normal-case btn-primary btn-sm"
              onClick={acceptClicked}>
              Accept
            </Button>
            <Button className="w-24 normal-case btn-sm" onClick={closeClicked}>
              Close
            </Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  )
}
