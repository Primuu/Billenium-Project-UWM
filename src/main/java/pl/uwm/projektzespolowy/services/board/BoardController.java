package pl.uwm.projektzespolowy.services.board;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.uwm.projektzespolowy.models.board.BoardUpdateDTO;
import pl.uwm.projektzespolowy.services.board.crud.BoardCRUDService;
import pl.uwm.projektzespolowy.models.board.BoardCreateDTO;
import pl.uwm.projektzespolowy.models.board.BoardResponseDTO;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/boards")
public class BoardController {

    private final BoardCRUDService boardCRUDService;

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public BoardResponseDTO createBoard(@RequestBody BoardCreateDTO boardCreateDTO) {
        return boardCRUDService.createBoard(boardCreateDTO);
    }

    @GetMapping("/{boardId}")
    @ResponseStatus(HttpStatus.OK)
    public BoardResponseDTO getBoardById(@PathVariable Long boardId) {
        return boardCRUDService.getBoardById(boardId);
    }

    @RequestMapping(method = RequestMethod.GET, params = {"boardId"})
    @ResponseStatus(HttpStatus.OK)
    public String getBoardTitleById(@RequestParam String boardId) {
        return boardCRUDService.getBoardTitleById(boardId);
    }

    @PutMapping("")
    @ResponseStatus(HttpStatus.OK)
    public BoardResponseDTO updateBoard(@RequestBody BoardUpdateDTO boardUpdateDTO) {
        return boardCRUDService.updateBoard(boardUpdateDTO);
    }

    @DeleteMapping("/{boardId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBoardById(@PathVariable Long boardId) {
        boardCRUDService.deleteBoard(boardId);
    }

}
